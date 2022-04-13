/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.86,20.94a4.74,4.74,0,0,1,1.86.64h.05a15.12,15.12,0,0,0-.61-8.37,1,1,0,0,0-1.28-.59h0a1,1,0,0,0-.59,1.28A13.19,13.19,0,0,1,30.86,20.94Z"/><path d="M26.33,28.58a13,13,0,0,1-6.07,2.82,1,1,0,1,0,.17,2h.18A15.16,15.16,0,0,0,27.82,30l0-.07A4.67,4.67,0,0,1,26.33,28.58Z"/><path d="M15.62,31.34v0a13.19,13.19,0,0,1-4.29-1.61A15.44,15.44,0,0,1,9.7,28.62,4.69,4.69,0,0,1,8.24,30a15.9,15.9,0,0,0,2.07,1.48,15.4,15.4,0,0,0,4.94,1.86h.19a1,1,0,0,0,.18-2Z"/><path d="M4.56,21.15a4.14,4.14,0,0,0,.6-.09A13,13,0,0,1,5.7,14a1,1,0,0,0-1.88-.69,15,15,0,0,0-.56,8.43A4.77,4.77,0,0,1,4.56,21.15Z"/><path d="M31.9,23a3.2,3.2,0,0,0-2.43-.42,3.27,3.27,0,0,0-1.4.77L24.2,21.11a6.87,6.87,0,0,0-2.77-8.43l-.11-.07a6.6,6.6,0,0,0-2.42-.81V8A3.22,3.22,0,0,0,20.78,6.5,3.3,3.3,0,0,0,19.65,2a3.15,3.15,0,0,0-2.42-.32,3.24,3.24,0,0,0-2,1.51,3.3,3.3,0,0,0,1.13,4.46A2.86,2.86,0,0,0,17.1,8V11.8a6.64,6.64,0,0,0-4.86,3.28,6.85,6.85,0,0,0-.42,6l-4,2.29a3.79,3.79,0,0,0-.45-.34l0,0A3.2,3.2,0,0,0,3,24.21a3.3,3.3,0,0,0,1.1,4.46,3.21,3.21,0,0,0,1.65.46,2.93,2.93,0,0,0,.78-.1,3.24,3.24,0,0,0,2.29-4.11l3.88-2.24a7.06,7.06,0,0,0,1.89,1.71,6.49,6.49,0,0,0,8.73-1.7l3.83,2.21a3.29,3.29,0,0,0,1.45,3.64,3.15,3.15,0,0,0,1.64.46A3.17,3.17,0,0,0,33,27.41,3.3,3.3,0,0,0,31.9,23ZM7,26.62a1.4,1.4,0,0,1-.91.64A1.36,1.36,0,0,1,5,27.11a1.48,1.48,0,0,1-.5-2,1.4,1.4,0,0,1,.88-.66,1.33,1.33,0,0,1,.34-.05,1.4,1.4,0,0,1,.75.22A1.48,1.48,0,0,1,7,26.62ZM16.78,4.09a1.4,1.4,0,0,1,.88-.66A1.33,1.33,0,0,1,18,3.38a1.42,1.42,0,0,1,.72.2,1.48,1.48,0,0,1,.5,2,1.4,1.4,0,0,1-.88.66,1.36,1.36,0,0,1-1.06-.15A1.48,1.48,0,0,1,16.78,4.09Zm2.41,19.32a4.79,4.79,0,0,1-3.68-.54A5.07,5.07,0,0,1,13.78,16,4.88,4.88,0,0,1,18,13.57a4.81,4.81,0,0,1,2.46.67,5.07,5.07,0,0,1,1.73,6.87A4.86,4.86,0,0,1,19.19,23.41Zm12.25,3.08a1.45,1.45,0,0,1-.88.67A1.36,1.36,0,0,1,29.5,27a1.48,1.48,0,0,1-.5-2,1.39,1.39,0,0,1,.9-.72,1.93,1.93,0,0,1,.34,0v0a1.31,1.31,0,0,1,.69.19A1.48,1.48,0,0,1,31.44,26.49Z"/><path d="M8.05,10A13,13,0,0,1,13.4,6.23a5,5,0,0,1-.17-2.07,15.15,15.15,0,0,0-6.7,4.51A1,1,0,0,0,8.05,10Z"/><path d="M24.67,7.23A13.11,13.11,0,0,1,27.93,10a1,1,0,1,0,1.52-1.3v0A15,15,0,0,0,25.69,5.5a15.87,15.87,0,0,0-2.94-1.33,4.79,4.79,0,0,1-.15,2.06A14.1,14.1,0,0,1,24.67,7.23Z"/>',

  solid:
    '<path d="M30.86,20.94a4.74,4.74,0,0,1,1.86.64h.05a15.12,15.12,0,0,0-.61-8.37,1,1,0,1,0-1.87.69A13.19,13.19,0,0,1,30.86,20.94Z"/><path d="M26.33,28.58a13,13,0,0,1-6.07,2.82,1,1,0,1,0,.17,2h.18A15.16,15.16,0,0,0,27.82,30v-.07A4.7,4.7,0,0,1,26.33,28.58Z"/><path d="M15.62,31.34a13.27,13.27,0,0,1-4.29-1.61A15.09,15.09,0,0,1,9.7,28.62,4.69,4.69,0,0,1,8.24,30a15.9,15.9,0,0,0,2.07,1.48,15.4,15.4,0,0,0,4.94,1.86h.19a1,1,0,0,0,.18-2Z"/><path d="M4.56,21.15q.3,0,.6-.09A13,13,0,0,1,5.7,14a1,1,0,0,0-1.88-.69,15,15,0,0,0-.56,8.43A4.77,4.77,0,0,1,4.56,21.15Z"/><path d="M31.9,23a3.2,3.2,0,0,0-2.43-.42,3.33,3.33,0,0,0-1.4.77L24.2,21.11a6.87,6.87,0,0,0-2.77-8.43l-.11-.07a6.73,6.73,0,0,0-2.42-.81V8a3.23,3.23,0,0,0,1.88-1.5A3.3,3.3,0,0,0,19.65,2a3.15,3.15,0,0,0-2.42-.32,3.24,3.24,0,0,0-2,1.51,3.3,3.3,0,0,0,1.13,4.46A3,3,0,0,0,17.1,8v3.8a6.63,6.63,0,0,0-4.86,3.28,6.85,6.85,0,0,0-.42,6l-4,2.29A3.79,3.79,0,0,0,7.37,23,3.2,3.2,0,0,0,3,24.21H3a3.3,3.3,0,0,0,1.1,4.46,3.21,3.21,0,0,0,1.65.46,2.93,2.93,0,0,0,.78-.1,3.25,3.25,0,0,0,2.34-3.94l0-.17,3.88-2.24a7,7,0,0,0,1.89,1.71,6.49,6.49,0,0,0,8.73-1.7l3.83,2.21a3.29,3.29,0,0,0,1.45,3.64A3.18,3.18,0,0,0,33,27.41,3.3,3.3,0,0,0,31.9,23Z"/><path d="M8.05,10A13,13,0,0,1,13.4,6.23a5,5,0,0,1-.17-2.07,15.15,15.15,0,0,0-6.7,4.51A1,1,0,0,0,8.05,10Z"/><path d="M24.67,7.23A13.11,13.11,0,0,1,27.93,10a1,1,0,1,0,1.52-1.3,15,15,0,0,0-3.76-3.2,15.87,15.87,0,0,0-2.94-1.33,4.79,4.79,0,0,1-.15,2.06A14.1,14.1,0,0,1,24.67,7.23Z"/>',
};

export const internetOfThingsIconName = 'internet-of-things';
export const internetOfThingsIcon: IconShapeTuple = [internetOfThingsIconName, renderIcon(icon)];
