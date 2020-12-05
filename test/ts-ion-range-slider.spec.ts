import { TsIonRangeSlider } from '../src/ts-ion-range-slider';

test('TsIonRangeSlider', () =>
{
  const div   = document.createElement('div');
  const input = document.createElement('input');
  div.append(input);

  let sliderInputElement = new TsIonRangeSlider.Slider(input, {
    skin            : 'round',
    grid            : true,
    grid_margin     : true,
    grid_num        : 4,
    grid_snap       : false,
    hide_from_to    : false,
    hide_min_max    : false,
    onChange        : obj => console.log(obj),
    onFinish        : obj => console.log(obj),
    onStart         : obj => console.log(obj),
    onUpdate        : obj => console.log(obj),
    type            : 'double',
    values          : ['a', 'b', 'c'],
    values_separator: ','
  });
  sliderInputElement.update({
    values: ['a', 'b', 'c', 'd'],
  });
  sliderInputElement.reset();
  sliderInputElement.destroy();
});

