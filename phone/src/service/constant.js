
export default {
  slyUrl () {
    if (process.environment === 'dev') {
      return 'http://192.168.12.**:8090'
    } else {
      return 'http://192.168.12.**:8090'// 'http://192.168.12.**:9090/***/api/'
    }
  },
  getPage () {
    return {
      page: 1,
      limit: 10
    }
  }
}
