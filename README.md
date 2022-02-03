# OneVendorsBundle_ModFedPlugin_SplitChunksPlugin

This repository is a reference to my blog post: 
https://dev.to/ivan_gadjovski/sharing-and-bundling-multiple-vendor-bundles-into-one-vendor-bundle-using-webpacks-module-federation-and-split-chunks-plugins-l3

### 1. Using Webpack's ModuleFederationPlugin
This project demonstrates the power of using Webpack’s ModuleFederationPlugin to share modules between two simple web applications, one acting as a host (app1) and the other one as a remote (app2). For simplicity, both apps are written in plain JavaScript. The idea is that the host loads the bundles of a function, which uses one Lodash method, as well as a button component, which uses the D3 library, directly from the remote app using Webpack’s ModuleFederationPlugin.

### 2. Using Webpack's SplitChunksPlugin
Bundling the two vendor libraries’ bundles into one bundle using Webpack’s SplitChunksPlugin, so that they can be shared between the remote and host applications as one chunk and improve performance.
