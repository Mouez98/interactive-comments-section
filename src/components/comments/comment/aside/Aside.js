import React from "react";

import minus from '../../../../asset/images/icon-minus.svg'
import plus from '../../../../asset/images/icon-plus.svg'

const Aside = () => (
  <aside>
    <button>
    <img src={plus} alt='+' />
    </button>
    <p>2</p>
    <button>
        <img src={minus} alt='-' />
    </button>
  </aside>
);

export default Aside;
