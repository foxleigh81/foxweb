/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link
          className={s.link}
          to="https://foxnet.lighthouseapp.com/projects/137358-foxweb-support/overview"
        >
          Raise a support request
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/login">
          Log in
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
