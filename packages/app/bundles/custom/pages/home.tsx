import React, { useState } from "react";
import { Theme } from "@my/ui";
import { UIWrapLib, UIWrap, withSession, Page, useEditor, API, SSR, useComposedState, Text, Pressable, Icon, VStack, HStack, Image } from "protolib";
import { DefaultLayout } from "../../../layout/DefaultLayout";
import { Protofy } from "protolib/base";
import { context } from "app/bundles/uiContext";
import { useRouter } from 'solito/navigation';
import { Objects } from "app/bundles/objects";

const isProtected = Protofy("protected", false);

const Home = ({ currentView, setCurrentView, props }: any) => {
  const { cs, states } = useComposedState();

  const router = useRouter();
  context.onRender(async () => { });
  return (
    <Page height="99vh">
      <DefaultLayout footer={<></>}>
        <VStack height="100%" alignItems="center" padding="$10">
          <Image url="/images/protofito.png" width="280px" height="200px"></Image>
          <VStack width="100%" margin="$6" alignItems="center">
            <Text fontSize="60px" fontWeight="600" textAlign="center">
              Welcome to Protofy
            </Text>
            <Text textAlign="center" fontWeight="200" width="550px" maxWidth="100%">
              Get started by editing this page. Log in with admin user to edit using the Visual UI Editor or access to CMS.
            </Text>
          </VStack>
          <HStack gap="$6" margin="$6" flexWrap="wrap" justifyContent="center">
            <Pressable onPress={(e) => context.navigate("/workspace/dev/pages", router)} width="300px" padding="$5" theme="green">
              <HStack gap="$2">
                <Text fontWeight="600" fontSize="18px">
                  CMS
                </Text>
                <Icon name="ArrowRight" size="20px"></Icon>
              </HStack>
              <Text fontWeight="200">Manage the contents of your project. Automations, devices and many others.</Text>
            </Pressable>
            <Pressable onPress={(e) => context.navigate("https://protofy.xyz/documentation", router)} width="300px" padding="$5" theme="blue">
              <HStack gap="$2">
                <Text fontWeight="600" fontSize="18px">
                  Documentation
                </Text>
                <Icon name="ArrowRight" size="20px"></Icon>
              </HStack>
              <Text fontWeight="200">Find detailed information about Protofy features, examples and more.</Text>
            </Pressable>
            <Pressable onPress={(e) => context.navigate("https://discord.com/invite/VpeZxMFfYW", router)} width="300px" padding="$5" theme="purple">
              <HStack gap="$2">
                <Text fontWeight="600" fontSize="18px">
                  Discord
                </Text>
                <Icon name="ArrowRight" size="20px"></Icon>
              </HStack>
              <Text fontWeight="200">Communicate your doubts and be the first to know about updates</Text>
            </Pressable>
          </HStack>
        </VStack>
      </DefaultLayout>
    </Page>
  );
};

const cw = UIWrapLib('@my/ui')

export default {
  route: Protofy("route", "/"),
  component: (props) => {
    const [currentView, setCurrentView] = useState("default");

    return useEditor(<Home currentView={currentView} setCurrentView={setCurrentView} {...props} />, {
      path: "/packages/app/bundles/custom/pages/home.tsx",
      components: {
        ...UIWrap("DefaultLayout", DefaultLayout, "../../../layout/DefaultLayout"),
        ...cw("Theme", Theme)
      },
      context: {
        currentView: currentView,
        setCurrentView: setCurrentView,
        Objects: Objects
      },
    });
  },
  getServerSideProps: SSR(async (context) => withSession(context, isProtected ? Protofy("permissions", []) : undefined)),
};
