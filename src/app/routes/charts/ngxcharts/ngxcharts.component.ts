import { Component } from '@angular/core';

@Component({
    selector: 'app-ngxcharts',
    templateUrl: './ngxcharts.component.html'
})
export class NgxChartsComponent {

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    single = [
        {
            'name': 'China',
            'value': 12940000
        },
        {
            'name': 'Germany',
            'value': 8940000
        },
        {
            'name': 'USA',
            'value': 5000000
        },
        {
            'name': 'France',
            'value': 7200000
        }
    ];

    multi = [
        {
            'name': 'China',
            'series': [
                {
                    'name': '2010',
                    'value': 9300000
                },
                {
                    'name': '2011',
                    'value': 12940000
                }
            ]
        },
        {
            'name': 'Germany',
            'series': [
                {
                    'name': '2010',
                    'value': 7300000
                },
                {
                    'name': '2011',
                    'value': 8940000
                }
            ]
        },
        {
            'name': 'USA',
            'series': [
                {
                    'name': '2010',
                    'value': 7870000
                },
                {
                    'name': '2011',
                    'value': 8270000
                }
            ]
        },

        {
            'name': 'France',
            'series': [
                {
                    'name': '2010',
                    'value': 5000002
                },
                {
                    'name': '2011',
                    'value': 5800000
                }
            ]
        }
    ];
}
