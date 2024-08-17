import getConfig from "next/config";

const { publicRuntimeConfig = {} } = getConfig()

export const assetPrefix = publicRuntimeConfig.assetPrefix || 'https://list.list.jibl2.com/';
