import React, { useState } from 'react';
import './App.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList} from 'recharts';
import { hotjar } from 'react-hotjar';

function App() {
  const [activeIndex, setIndex] = useState(-2);
  const data = [
    {
      name: 'Page A',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page B',
      uv: 30,
      pv: 13,
    },
    {
      name: 'Page C',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page D',
      uv: 30,
      pv: 13,
    },
    {
      name: 'Page E',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page F',
      uv: 30,
      pv: 13,
    },
    {
      name: 'Page G',
      uv: 40,
      pv: 24,
    },
    {
      name: 'Page H',
      uv: 30,
      pv: 13,
    },
  ]

  const handleClick = (data, index) => {
    if (activeIndex === index){
      setIndex(-2)
    } else {
      setIndex(index)
      // Identify the chart
      hotjar.identify('CHART_ID', { name_chart: data.name });
      // Add an event
      hotjar.event('button-click-chart');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>My Charts</p>
        <div style={{width: 1000, height: 600}}>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={150}
                height={40}
                data={data}
                //Mengatur margin barchart
                margin={{top: 5, right: 15, left:15, bottom: 10}}
              >
                {/* Mengatur grid pada chart */}
                <CartesianGrid  vertical={false}/>
                <XAxis dataKey="name" interval={0} />
                <YAxis 
                  // Range atau domain
                  domain={[0, 'dataMax + 2']}
                  // Mengatur jumlah index yang dimunculkan 
                  tickCount={8}
                  // Tipe
                  type="number"
                />
                <Tooltip cursor={{fill: 'transparent'}} title="uv"/>
                <Bar
                  dataKey="uv"
                  onClick={handleClick}
                  //Mengatur radius dari chart
                  radius={[10, 10, 0, 0]}
                >
                {/* Menampilkan label value pada bar chart */}
                <LabelList dataKey="uv" position="top" style={{fill : '#ffffff'}}/>
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={activeIndex === -2 ? '#B31E72' : index === activeIndex ? '#B31E72' : '#FAEFF5'}
                      key={`cell-${index}`}
                    />
                  ))}
                </Bar>
                <Bar
                  dataKey="pv"
                  onClick={handleClick}
                  //Mengatur radius dari chart
                  radius={[10, 10, 0, 0]}
                >
                {/* Menampilkan label value pada bar chart */}
                <LabelList dataKey="pv" position="top" style={{fill : '#ffffff'}}/>
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={activeIndex === -2 ? '#ED7F19' : index === activeIndex ? '#ED7F19' : '#F8E3BE'}
                      key={`cell-${index}`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
