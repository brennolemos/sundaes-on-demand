import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays image for each scoop option from the server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole('image', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
