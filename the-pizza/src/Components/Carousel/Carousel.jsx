
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Testimonial() {
  const clients = [
    {
      id: 1,
      name: 'Marcel M.',
      comment: 'Exzellente Pizzen - toller Geschmack! 👌🏻',
      source: 'Facebook'
    },
    {
      id: 2,
      name: 'Basebike S.',
      comment: 'So gute Pizza wie in Neapel!',
      source: 'Facebook'
    },
    {
      id: 3,
      name: 'Nicci K.',
      comment: 'Toller Geschmack und Top Qualität 👍',
      source: 'Facebook'
    },
    {
      id: 4,
      name: 'Georg S.',
      comment: '10 von 10 Punkten. Sehr gute Qualität. Top',
      source: 'Facebook'
    }
  ];

  return (
    <Carousel>
      {clients.map((client) => (
        <Carousel.Item key={client.id} interval={2500}>
          <Card>
            <Card.Header>Zitat</Card.Header>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p>{client.comment}</p>
                <footer className='blockquote-footer'>
                  {client.name} <br />
                  <cite title='Source Title'>{client.source}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Testimonial;
