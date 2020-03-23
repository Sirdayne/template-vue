<template>
  <div>
    <h2>Template Vue.js</h2>
    <div class="box"></div>
    <div class="chart-container" style="display: none;">
      <div class="chart-box">
        <canvas id="chart" width="400" height="400"></canvas>
      </div>
    </div>
  </div>
</template>

<script>

import Chart from 'chart.js'
import moment from 'moment'

export default {
  data: () => ({
    sign: '!',
    results: [
      {
        id: 1,
        name: 'first'
      },
      {
        id: 2,
        name: 'second'
      },
      {
        id: 3,
        name: 'third'
      }
    ],
    cloned: []
  }),
  computed: {
    getTime () {
      return moment().format('MM/DD/YYYY')
    },
    getValue () {
      return this.$store.getters.getValue
    },
    getWorld () {
      return this.$store.getters.getWorld
    }
  },
  created () {
    this.$store.dispatch('setValue', 'first')
    this.$store.dispatch('setWorld', 'page')
    this.cloned = this.$lodash.cloneDeep(this.results)
    this.cloned.push({ id: 4, name: 'fourth' })
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      // eslint-disable-next-line
      let chart = new Chart('chart', {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
          datasets: [{
            label: '# of Anything',
            data: [12, 7, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    },
    signIn () {
      this.$API.setAuthHandler(() => {
        return this.$API.covAuth({
          originUri: process.env.ORIGIN_URI,
          authRedirect: window.location.href,
          appRedirect: this.$route.query.page
        })
      })
      this.$API.handleCovAuthResponse().then(() => {
        console.log('LOGGED IN')
      }).fail(err => {
        console.log('ERR: ', err)
      })
      this.$API.covAuth({
        originUri: process.env.ORIGIN_URI,
        authRedirect: window.location.href,
        appRedirect: this.$route.query.page ? this.$route.query.page : '/'
      })
    }
  }
}
</script>
