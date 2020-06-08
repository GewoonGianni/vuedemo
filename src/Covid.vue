<template>
  <div>
    <div v-for="statistic in statistics" :key="statistic.CountryCode">
      <h1>{{ statistic.Country }}</h1>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
            <td>Total Confirmed:</td>
            <td>{{ statistic.TotalConfirmed }}</td>
            <td>New Confirmed:</td>
            <td>{{ statistic.NewConfirmed }}</td>
        </tr>

        <tr>
            <td>Total Deaths:</td>
            <td>{{ statistic.TotalDeaths }}</td>
            <td>New Deaths:</td>
            <td>{{ statistic.NewDeaths }}</td>
        </tr>

        <tr>
            <td>Total Recovered:</td>
            <td>{{ statistic.TotalRecovered }}</td>
            <td>New Recovered:</td>
            <td>{{ statistic.NewRecovered }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      statistics: []
    };
  },
  methods: {},
  created() {
    axios.get("https://api.covid19api.com/summary").then(response => {
      console.log(response);
      this.statistics = response.data.Countries;
      console.log(this.statistics);
    });
  }
};
</script>