import React from 'react';

import ScrollVelocity from '../../components/bits/TextAnimations/ScrollVelocity/ScrollVelocity';

const ScrollVelocityText: React.FC = () => {
    return (
        <div className='"w-full'> 
       <div className="overflow-hidden">
  <ScrollVelocity
    texts={['💸	EARN REWARDS', 'KREYT WITH US 🪙	']}
    velocity={100}
    className="custom-scroll-text"
  />

</div>
</div>

    );
};

export default ScrollVelocityText;
