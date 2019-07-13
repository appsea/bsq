/// <reference path="admob-common.d.ts"/>

declare module "nativescript-admob" {

    export function createBanner(arg): Promise<any>;

    /**
     * If you want to show a different banner than the one showing you don't need to call
     * 'hideBanner since `createBanner` will do that for you to prevent your app from crashing.
     */
    export function hideBanner(): Promise<any>;

    /**
     * To show a fullscreen banner you can use this function.
     * Note that Interstitial banners need to be loaded before they can be shown,
     * so use this function, and when the promise resolves you can call 'showInterstitial'.
     * If you don't want to use 2 steps, use createInterstitial instead, but there will be a (preloading) delay
     * which is not recommended.
     */
    export function preloadInterstitial(arg): Promise<any>;

    /**
     * Use after the 'preloadInterstitial' promise has resolved. It should immediately show the interstitial,
     * as opposed to the delay you'd see when using 'createInterstitial'.
     */
    export function showInterstitial(): Promise<any>;

    /**
     * @Deprecated use 'preloadInterstitial' and 'showInterstitial' instead.
     *
     * To show a fullscreen banner you can use this function.
     * Note that Interstitial banners need to be loaded before they can be shown,
     * but don't worry: this plugin will manage that transparently for you.
     * However, Google won't like it too much, because there will be a delay.
     */
    export function createInterstitial(arg): Promise<any>;

    /**
     */



    /**
     * To show a reward video add you can use this function to preload the ad.
     */
    export function preloadRewardedVideoAd(arg): Promise<any>;

    /**
     * To show a reward video add you can use this function to preload the ad.
     */
    export function showRewardedVideoAd(arg): Promise<any>;
}