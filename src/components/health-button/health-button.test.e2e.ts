import { newE2EPage } from '@stencil/core/testing';

describe('health-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<health-button></health-button>');
    const element = await page.find('health-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<health-button></health-button>');
    const component = await page.find('health-button');
    const element = await page.find('health-button >>> button');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('title', 'Simple button');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Simple button`);
  });
});
