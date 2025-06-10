declare module 'react-native-responsive-screen' {
  import { Component } from 'react';

  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;
  export function listenOrientationChange(setOrientation: (state:object)=>void): void;
  export function removeOrientationListener(): void;
}
