import { Theme, XStack, Paragraph, Stack, Spinner, Text, Dialog, Button, Popover, YStack } from 'tamagui'
import { useTint } from '@tamagui/logo'
import { Check, FileEdit, X, Trash2 } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { ItemCard } from './ItemCard'
import JSONViewer from './jsonui/JSONViewer'
import { getPendingResult } from '../lib/createApiAtom'
import React from 'react'

export const DataCard = React.forwardRef(({ json, name, onSave = (content) => { }, onDelete = () => { }, ...props }: any, ref: any) => {
    const { tint } = useTint()
    const [editable, setEditable] = useState(false)
    const [content, setContent] = useState(json)
    const [childKey, setChildKey] = useState(0);
    const [loadingState, setLoadingState] = useState(getPendingResult('pending'))
    const [originalContent, setOriginalContent] = useState(json)
    const [menuOpened, setMenuOpened] = useState(false)
    const onCancel = () => {
        setChildKey(prevKey => prevKey + 1);
        setContent(originalContent)
        setEditable(!editable)
    }

    const onDone = async () => {
        setChildKey(prevKey => prevKey + 1);
        setEditable(!editable)
        setOriginalContent(content)
        setLoadingState(await onSave(content) as any)
    }

    const onJsonUpdate = (obj) => {
        setContent(obj)
    }


    return (
        <Stack ref={ref} {...props}>
            <ItemCard
                elevation="$3"
                pointerEvents='none'
                pointerEventsControls="none"
                topBar={<Theme name={tint as any}>
                    <XStack justifyContent="flex-start" alignItems={'center'} paddingHorizontal="$3" width="100%">
                        <Paragraph flex={1} marginRight={"-$5"} opacity={0.8}>{name}</Paragraph>
                        <Theme reset>
                            <XStack left={"-$10"}>
                                <Popover  onOpenChange={setMenuOpened} open={menuOpened} placement="bottom-end">
                                    <Popover.Trigger>
                                        <XStack cursor="pointer" onPress={() => setMenuOpened(true)}>
                                            <Stack marginRight={"$3"} opacity={0.5} cursor="pointer" hoverStyle={{ opacity: 0.8 }}>
                                                <Trash2 size={"$1"} />
                                            </Stack>
                                        </XStack>

                                    </Popover.Trigger>

                                    <Popover.Content padding={0} space={0} top={"$2"}>
                                        <YStack alignItems="center" justifyContent="center" padding={"$5"} paddingVertical={"$5"}>
                                            <Paragraph marginBottom="$3">
                                                <Text>
                                                    Are you sure?
                                                </Text>
                                            </Paragraph>
                                            <Button onPress={() => { onDelete(name) && setMenuOpened(false)}}><Trash2 size={"$1"} color="var(--red10)" /> Delete</Button>
                                        </YStack>
                                    </Popover.Content>

                                    {/* optionally change to sheet when small screen */}

                                </Popover>

                                {editable ? <Stack paddingHorizontal={"$3"} onPress={onCancel} opacity={0.5} cursor="pointer" hoverStyle={{ opacity: 0.8 }}>
                                    <X color="var(--red9)" size={"$1"} />
                                </Stack> : null}
                                {!editable ? <Stack onPress={() => setEditable(!editable)} opacity={0.5} cursor="pointer" hoverStyle={{ opacity: 0.8 }}>
                                    <FileEdit size={"$1"} />
                                </Stack> : <Stack onPress={onDone} opacity={0.5} cursor="pointer" hoverStyle={{ opacity: 0.8 }}>
                                    <Check color="var(--color9)" size={"$1"} />
                                </Stack>}

                            </XStack>
                        </Theme>
                    </XStack>
                </Theme>}
            >
                <Stack
                    padding={"$2"}
                    maxWidth={700}
                    minWidth={300}
                    $md={{ maxWidth: 450 }}
                    $sm={{ minWidth: 'calc(100vw - 65px)', maxWidth: 'calc(100vw - 65px)' }}
                >
                    <Theme name={tint as any}>
                        <XStack y={0} maxHeight={-1} overflow={"hidden"}>
                            {loadingState.isLoading ?
                                <Spinner /> :
                                loadingState.isError ?
                                    <Text>ERROR</Text> :
                                    <JSONViewer key={childKey} onChange={onJsonUpdate} editable={editable} data={content} collapsible />
                            }
                        </XStack>
                    </Theme>
                </Stack>
            </ItemCard>
        </Stack>)
})