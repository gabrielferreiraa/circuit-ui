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

import { Component } from 'react';
import PropTypes from 'prop-types';

import { isFunction } from '../../util/type-check';

class State extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    initial: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    updaterName: PropTypes.string.isRequired,
    updater: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const { initial, name } = props;
    const initialStateValue = isFunction(initial) ? initial(props) : initial;
    this.state = {
      [name]: initialStateValue
    };
  }

  render() {
    const { children, name, updaterName, updater } = this.props;

    const props = {
      [name]: this.state[name],
      [updaterName]: data => {
        this.setState(prevState => ({
          [name]: updater(prevState[name], data)
        }));
      }
    };

    return children(props);
  }
}

/**
 * @component
 */
export default State;
