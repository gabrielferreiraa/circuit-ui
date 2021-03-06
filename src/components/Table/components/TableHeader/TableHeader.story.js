/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, text, select } from '@storybook/addon-knobs/react';
import { GROUPS } from '../../../../../.storybook/hierarchySeparators';

import withTests from '../../../../util/withTests';
import TableHeader from '.';

const options = {
  [TableHeader.LEFT]: TableHeader.LEFT,
  [TableHeader.RIGHT]: TableHeader.RIGHT,
  [TableHeader.CENTER]: TableHeader.CENTER
};

storiesOf(`${GROUPS.COMPONENTS}|Table/TableHeader`, module)
  .addDecorator(withTests('TableHeader'))
  .add(
    'Table Header',
    withInfo()(() => (
      <TableHeader
        style={{ width: '300px', alignSelf: 'center' }}
        align={select('Align', options)}
        sortable={boolean('Sortable', false)}
      >
        {text('Content', 'Header')}
      </TableHeader>
    ))
  );
