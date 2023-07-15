import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { SlideOver } from './slide-over';
import { Button } from '../button';
import { SlideOverCloseCallback } from './types';

const meta: Meta = {
  title: 'Overlays/SlideOver',
  component: SlideOver,
};
export default meta;

export const Basic: StoryFn<typeof SlideOver> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose: SlideOverCloseCallback = (source) => {
    setIsOpen(false);
    args.onClose(source);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Open slide-over
      </Button>
      {isOpen && (
        <SlideOver onClose={onClose}>
          <SlideOver.Header
            title="Slide-over header"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <SlideOver.Body>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                backgroundSize: '10px 10px',
                backgroundImage: 'repeating-linear-gradient(' +
                  '45deg, ' +
                  'var(--dc-bg-transparent-2) 0, ' +
                  'var(--dc-bg-transparent-2) 1px, ' +
                  'transparent 0, ' +
                  'transparent 50%' +
                  ')',
              }}
            >
              Slide-over body
            </div>
          </SlideOver.Body>
        </SlideOver>
      )}
    </div>
  );
};
