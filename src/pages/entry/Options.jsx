import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';

import ScoopOption from './ScoopOption';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios.get(`http://localhost:3030/${optionType}`);
      setItems(data);
    };

    loadData();
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
