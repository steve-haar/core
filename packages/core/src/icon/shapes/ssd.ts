/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,22H4V8H32Z"/><circle cx="6.21" cy="10.25" r="1.25"/><circle cx="29.81" cy="10.25" r="1.25"/><circle cx="6.21" cy="25.42" r="1.25"/><circle cx="29.81" cy="25.42" r="1.25"/><path d="M10,18.62c1.32.31,1.91.54,1.91,1.22s-.53,1.09-1.55,1.09a4,4,0,0,1-2.71-1.11l-.86,1.06a5,5,0,0,0,3.52,1.34c2,0,3.1-1,3.1-2.52s-1.15-2.05-2.87-2.44c-1.31-.3-1.92-.54-1.92-1.21A1.25,1.25,0,0,1,10,15a3.68,3.68,0,0,1,2.37,1l.81-1.1A4.58,4.58,0,0,0,10,13.69c-1.74,0-3,1.05-3,2.49S8.26,18.22,10,18.62Z"/><path d="M17.83,20.93a4,4,0,0,1-2.71-1.11l-.86,1.06a5,5,0,0,0,3.52,1.34c2,0,3.1-1,3.1-2.52S19.73,17.65,18,17.26c-1.31-.3-1.92-.54-1.92-1.21A1.25,1.25,0,0,1,17.48,15a3.68,3.68,0,0,1,2.37,1l.81-1.1a4.56,4.56,0,0,0-3.12-1.15c-1.73,0-3,1.05-3,2.49s1.19,2,2.89,2.44c1.32.31,1.91.54,1.91,1.22S18.85,20.93,17.83,20.93Z"/><path d="M29.9,18c0-2.41-1.92-4.12-4.64-4.12h-2.9v8.24h2.9C28,22.08,29.9,20.37,29.9,18Zm-6-2.76h1.56a2.77,2.77,0,1,1,0,5.53H23.86Z"/>',
  solid:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM5.21,8A1.25,1.25,0,1,1,4,9.25,1.25,1.25,0,0,1,5.21,8Zm0,20a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,5.21,28Zm5.06-5.78a5,5,0,0,1-3.52-1.34l.86-1.06a4,4,0,0,0,2.71,1.11c1,0,1.55-.5,1.55-1.09s-.59-.91-1.91-1.22c-1.7-.4-2.89-.89-2.89-2.44s1.22-2.49,3-2.49a4.58,4.58,0,0,1,3.12,1.15l-.81,1.1A3.68,3.68,0,0,0,10,15a1.25,1.25,0,0,0-1.39,1.08c0,.67.61.91,1.92,1.21,1.72.39,2.87.94,2.87,2.44S12.24,22.22,10.27,22.22Zm7.51,0a5,5,0,0,1-3.52-1.34l.86-1.06a4,4,0,0,0,2.71,1.11c1,0,1.55-.5,1.55-1.09s-.59-.91-1.91-1.22c-1.7-.4-2.89-.89-2.89-2.44s1.23-2.49,3-2.49a4.56,4.56,0,0,1,3.12,1.15l-.81,1.1a3.68,3.68,0,0,0-2.37-1,1.25,1.25,0,0,0-1.39,1.08c0,.67.61.91,1.92,1.21,1.72.39,2.87.94,2.87,2.44S19.75,22.22,17.78,22.22Zm4.58-.14V13.84h2.9c2.72,0,4.64,1.71,4.64,4.12S28,22.08,25.26,22.08ZM30.69,28a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.69,28Zm0-17.5a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.69,10.5Z"/><path d="M23.86,15.2h1.56a2.77,2.77,0,1,1,0,5.53H23.86Z"/>',
};

export const ssdIconName = 'ssd';
export const ssdIcon: IconShapeTuple = [ssdIconName, renderIcon(icon)];
