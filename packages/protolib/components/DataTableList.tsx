import { Checkbox, Stack, Theme, XStack, Circle, Spacer, YStack, Text } from "@my/ui"
import { DataTable2 } from "./DataTable2";
import { Tinted } from "./Tinted";
import { CheckCheck, Check, Pencil } from '@tamagui/lucide-icons'
import { ItemMenu } from "./ItemMenu";
import { usePageParams } from '../next'
import { InteractiveIcon } from "./InteractiveIcon";
import { Chip } from "./Chip";

export const getFieldPreview = (key, row, def, plain?) => {
    if (def?.color) {
        return <Chip color={"$gray5"}>
            <XStack ai="center" height={20}>
                <Circle size={12} backgroundColor={row[key]} />
                <Spacer size={5} />
                {row[key] && row[key].toUpperCase ? row[key].toUpperCase() : row[key]}
            </XStack>

        </Chip>
    }

    if(def?.typeName === 'ZodBoolean') {
        return row[key] == true ? 'true' : row[key] == false ? 'false' : ''
    }

    if(def?.typeName === 'ZodArray') {
        if(plain) {
            return row[key] && row[key].length > 0 && row[key].join(', ')
        }
        return row[key] && row[key].length ? <XStack space={"$1"}>
            {row[key].map((r,i) => <Chip key={i} text={r} color={'$color5'} />)}
        </XStack> : ''
    }

    return <Text fos="$3">{row[key]}</Text>
}

type DataTableListState = {
    itemsPerPage?: number;
    page?: number;
};

export const DataTableList = ({
    sourceUrl,
    onDelete = () => { },
    items,
    model,
    deleteable = () => { },
    extraMenuActions = [],
    enableAddToInitialData,
    selected = [],
    rowIcon = Pencil,
    columns,
    state = {} as DataTableListState,
    setSelected = (item) => { },
    onSelectItem = (item) => { },
    disableRowIcon = false,
    disableItemSelection = false
}) => {
    const { push, mergePush } = usePageParams(state)
    const conditionalRowStyles = [
        {
            when: row => selected.some(item => item.id === model.load(row).getId()),
            style: {
                backgroundColor: 'var(--color4)'
            },
            '&:hover': {
                backgroundColor: 'var(--color4)'
            }
        },
    ]

    const fields = model.getObjectSchema().isDisplay('table')

    const validTypes = ['ZodString', 'ZodNumber', 'ZodBoolean', 'ZodDate']
    const cols = columns ?? DataTable2.columns(
        ...(
            Object.keys(fields.shape)
                .filter(key => {
                    const def = fields.shape[key]._def?.innerType?._def ?? fields.shape[key]._def

                    if(def?.typeName === 'ZodArray') {
                        return validTypes.includes(def?.type?._def?.typeName)
                    }
                    return validTypes.includes(def?.typeName)
                }).map(key => {
                    const def = fields.shape[key]._def?.innerType?._def ?? fields.shape[key]._def
                    return DataTable2.column(
                        fields.shape[key]._def?.label ?? key,
                        row => getFieldPreview(key, row, def),
                        fields.shape[key]._def?.indexed ? key : false
                    )
                })
        )
    )
    return <XStack pt="$1" flexWrap='wrap' f={1} bc="$bgPanel" br="$6" mt="$2" mb="$6" overflow="scroll" overflowX="hidden">
        <Tinted>
            <DataTable2.component
                disableItemSelection={disableItemSelection}
                pagination={false}
                conditionalRowStyles={conditionalRowStyles}
                rowsPerPage={state.itemsPerPage ? state.itemsPerPage : 25}
                handleSort={(column, orderDirection) => {
                    mergePush({ orderBy: column.sortField, orderDirection })}
                }
                handlePerRowsChange={(itemsPerPage) => push('itemsPerPage', itemsPerPage)}
                handlePageChange={(page) => push('page', parseInt(page, 10) - 1)}
                //@ts-ignore
                currentPage={(isNaN(parseInt(state.page, 10)) ? 0 : parseInt(state.page, 10)) + 1}
                totalRows={items?.data?.total}
                columns={[DataTable2.column(
                    <Theme reset>
                        <XStack>
                            <Stack mt={"$2"} ml="$3" o={0.8}>
                                <Checkbox focusStyle={{ outlineWidth: 0 }} br="$2" checked={selected.length > 1} onPress={(e) => {
                                    if (selected.length) {
                                        setSelected([])
                                    } else {
                                        console.log('selection all: ', items?.data?.items)//.map(x => model.load(x).getId()))
                                        setSelected(items?.data?.items)//.map(x => model.load(x).getId()))
                                    }
                                }}>
                                    <Checkbox.Indicator>
                                        <CheckCheck />
                                    </Checkbox.Indicator>
                                </Checkbox>
                            </Stack>

                            {selected.length > 1 &&
                                <ItemMenu enableAddToInitialData={enableAddToInitialData}
                                    type={"bulk"}
                                    mt={"1px"}
                                    ml={"-5px"}
                                    element={model.load(selected)}
                                    sourceUrl={sourceUrl}
                                    deleteable={deleteable}
                                    onDelete={onDelete}
                                    extraMenuActions={extraMenuActions} />}
                        </XStack>
                    </Theme>, () => "", false, row => <Theme reset><XStack ml="$3" o={0.8}>
                        <Stack mt={"$2"}>
                            <Checkbox
                                id={`select-checkbox-${model.load(row).getId()}`}
                                focusStyle={{ outlineWidth: 0 }}
                                br="$2"
                                onPress={() => {
                                    const getCurrentId = (item) => model.load(item).getId();
                                    const currentId = getCurrentId(row);
                                    const isAlreadySelected = selected.some(item => getCurrentId(item) === currentId);

                                    if (isAlreadySelected) {
                                        setSelected(selected.filter(item => getCurrentId(item) !== currentId));
                                    } else {
                                        setSelected([...selected, row]);
                                    }
                                }}
                                checked={selected.some(item => model.load(item).getId() === model.load(row).getId())}
                            >
                                <Checkbox.Indicator>
                                    <Check />
                                </Checkbox.Indicator>
                            </Checkbox>
                        </Stack>
                        <ItemMenu enableAddToInitialData={enableAddToInitialData}
                            type={"item"}
                            ml={"-5px"}
                            mt={"1px"}
                            element={model.load(row)}
                            sourceUrl={sourceUrl + "/" + model.load(row).getId()}
                            deleteable={deleteable}
                            onDelete={onDelete}
                            extraMenuActions={extraMenuActions} />

                            {!disableRowIcon && <InteractiveIcon Icon={rowIcon} onPress={() => onSelectItem(model.load(row))}></InteractiveIcon>}

                    </XStack>
                    </Theme>, true, '115px'),
                ...cols
                ]}
                rows={items?.data?.items}
                onRowPress={(rowData) => onSelectItem(model.load(rowData))}
            />
        </Tinted>
    </XStack>
}
