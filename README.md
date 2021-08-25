# Components and methods for Data Fair apps

## Usage

Example for filters :
```
import { filters2qs } from '@koumoul/df-app-components/filters/filters'
...
const params = {
    qs: filters2qs(getters.config.staticFilters || [])
}
const { data } = await axios.get(getters.config.datasets[0].href + '/lines', { params })
```
