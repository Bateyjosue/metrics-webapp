import { render } from '@testing-library/react';
import DuneBook from '../Components/Pages/duneBook';
import BookDetails from '../Components/BookDetails';

describe('DuneBook Component Test', () => {
  test('should render DuneBook on the DON ', () => {
    const homeTree = render(<DuneBook />);
    expect(homeTree).toMatchSnapshot();
  });
});

describe('BookDetails Component Test', () => {
  test('should render BookDetails on the DOM ', () => {
    const homeTree = render(<BookDetails />);
    expect(homeTree).toMatchSnapshot();
  });
});
