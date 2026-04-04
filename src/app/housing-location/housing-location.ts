import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.css']
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>() // This is a required input property of type HousingLocationInfo, which does not have a default value. The component expects this property to be provided by its parent component when it is used in a template.
}
