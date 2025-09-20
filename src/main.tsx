import React from 'react';
import ReactDOM from 'react-dom/client';

import 'modern-normalize';
import './global.css';

import layout from './AppLayout.module.css';

import { DemoSection } from './components/DemoSection';
import { ThemeToggle } from './components/ThemeToggle';

import { ProductApp } from './components/product';
import { MailboxApp } from './components/mailbox';
import { BookApp } from './components/book';
import { AlertApp } from './components/alert';
import { ButtonApp } from './components/button';
import { UserMenuApp } from './components/user-menu-icons';
import { ClickCountingApp } from './components/click-counting';
import { HandleClickApp } from './components/handle-click';
import { ClickCounterApp } from './components/click-counter';
import { CounterApp } from './components/counter';
import { ProperConditionApp } from './components/proper-condition';
import { IndependentStatesApp } from './components/independent-states';
import { UpdatingObjectsApp } from './components/updating-objects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <main className={layout.container}>
      <ThemeToggle />

      <DemoSection title="Product">
        <ProductApp />
      </DemoSection>

      <DemoSection title="Mailbox">
        <MailboxApp />
      </DemoSection>

      <DemoSection title="Books" note="Список книг із компонентом BookItem">
        <BookApp />
      </DemoSection>

      <DemoSection title="Alert">
        <AlertApp />
      </DemoSection>

      <DemoSection title="Button">
        <ButtonApp />
      </DemoSection>

      <DemoSection title="User Menu Icons">
        <UserMenuApp />
      </DemoSection>

      <DemoSection title="Click Counting" note="Локальний стейт + інкремент">
        <ClickCountingApp />
      </DemoSection>

      <DemoSection
        title="Handle Click"
        note="Типізація MouseEvent<HTMLButtonElement>"
      >
        <HandleClickApp />
      </DemoSection>

      <DemoSection
        title="Click Counter (shared state)"
        note="Якщо кілька компонентів повинні працювати зі спільними даними – піднімайте стан у спільного батька."
      >
        <ClickCounterApp />
      </DemoSection>

      <DemoSection
        title="Proper Condition"
        note="Для кожної 'частинки' даних використовуйте окремий useState."
      >
        <CounterApp />
      </DemoSection>

      <DemoSection title="Updating Objects">
        <ProperConditionApp />
      </DemoSection>

      <DemoSection title="Updating Objects">
        <IndependentStatesApp />
      </DemoSection>

      <DemoSection title="Updating Objects">
        <UpdatingObjectsApp />
      </DemoSection>
    </main>
  </React.StrictMode>
);
