import { EmitterSubscription } from "react-native";

declare module 'react-native-responsive-screen' {
  import { Component } from 'react';
  

  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;
  export function listenOrientationChange(setOrientation: (state:object)=>void): EmitterSubscription;
 // export function removeOrientationListener(): void;
}
