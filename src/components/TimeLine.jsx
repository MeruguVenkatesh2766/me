import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const TimelineComp = () => (
  <div>
    <span className="heading-meta">Highlights</span>
    <h2 className="colorlib-heading">TimeLine</h2>
  <Timeline
    items={[
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <SmileOutlined />,
        children: <p>Custom color testing</p>,
      },
    ]}
  />
  </div>
);
export default TimelineComp;