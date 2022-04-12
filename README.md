# sales-dashboard-react

Internal sales dashboard with period filters, built in 2022 for an operations
team that read the numbers in a spreadsheet.

## run

    npm install
    npm start

Env: `REACT_APP_API_URL`.

## notes

The hook aborts in flight requests on unmount and on period change; without it
a slow response from the previous filter overwrites the current one.

Formatting goes through `Intl.NumberFormat`, never string concatenation.
