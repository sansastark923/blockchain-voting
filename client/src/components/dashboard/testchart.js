import React from 'react'
import Chart from 'react-google-charts';

class TestChart extends React.Component {
  render() {
    var data_temp = [['Name', 'Count']];
    this.props.candidates.forEach(candidate => {
      data_temp.push([candidate.name, candidate.voteCount.toNumber()]);
    });

    return (
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data_temp}
            options={{
              title: 'Results',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
</div>
    )
  }
}

export default TestChart
