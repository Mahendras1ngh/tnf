'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { FAQS } from './landing-data';

export function Faq() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap" style={{ maxWidth: '860px' }}>
        <div
          className="label reveal"
          style={{ justifyContent: 'center', marginBottom: '40px' }}
        >
          Frequently Asked Questions
        </div>

        <Accordion.Root type="single" collapsible className="reveal">
          {FAQS.map((faq, i) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${i}`}
              style={{
                borderBottom: '1px solid var(--border)',
              }}
            >
              <Accordion.Header style={{ margin: 0 }}>
                <Accordion.Trigger
                  className="cv-faq-trigger"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 4px',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--ink)',
                  }}
                >
                  {faq.question}
                  <Plus
                    className="cv-faq-icon w-5 h-5 flex-shrink-0"
                    style={{
                      color: 'var(--gold)',
                      transition: 'transform .3s var(--ease)',
                    }}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="cv-faq-content">
                <p
                  style={{
                    padding: '0 4px 20px',
                    color: 'var(--ink-mute)',
                    fontSize: '15px',
                    margin: 0,
                    maxWidth: '68ch',
                  }}
                >
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <style>{`
        .cv-faq-content {
          overflow: hidden;
        }
        .cv-faq-content[data-state='open'] {
          animation: cvFaqDown 0.25s var(--ease-out);
        }
        .cv-faq-content[data-state='closed'] {
          animation: cvFaqUp 0.2s var(--ease-out);
        }
        .cv-faq-trigger[data-state='open'] .cv-faq-icon {
          transform: rotate(45deg);
        }
        @keyframes cvFaqDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes cvFaqUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
