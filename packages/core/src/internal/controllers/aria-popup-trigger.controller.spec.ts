/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { customElement, property } from '@cds/core/internal';
import { ariaPopupTrigger } from './aria-popup-trigger.controller.js';

@ariaPopupTrigger<AriaPopupTriggerControllerTestElement>()
@customElement('aria-popup-controller-test-element')
class AriaPopupTriggerControllerTestElement extends LitElement {
  @property({ type: String }) popup: string;
}

describe('aria-popup-trigger.controller', () => {
  let component: AriaPopupTriggerControllerTestElement;
  let noponent: AriaPopupTriggerControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`
        <aria-popup-controller-test-element id="initme" popup="popup-el"></aria-popup-controller-test-element>
        <aria-popup-controller-test-element id="dontinitme"></aria-popup-controller-test-element>
      `
    );
    component = element.querySelector('#initme');
    noponent = element.querySelector('#dontinitme');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should initialize aria attributes for popup type triggers', async () => {
    await componentIsStable(component);
    expect(component.ariaControls).toBe('popup-el');
    expect(component.ariaHasPopup).toBe('true');
    expect(component.ariaExpanded).toBe('false');
  });

  it('should NOT initialize aria attributes for triggers without a popup id', async () => {
    await componentIsStable(noponent);
    expect(noponent.hasAttribute('popup')).toBe(false);
    expect(noponent.ariaControls).toBe(undefined);
    expect(noponent.ariaHasPopup).toBe(null);
    expect(noponent.ariaExpanded).toBe(null);
  });
});
