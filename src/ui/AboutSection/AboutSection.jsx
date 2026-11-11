import Title from '../title/Title'
import Paragraph from '../../components/paragraph/Paragraph'
import Button from '../../components/Button/Button'

const AboutSection = () => {

  const headerButtons = ["Home", "Menu", "Blog", "Home", "Menu", "Blog", "Home", "Menu", "Blog"]
  return (
    <div>
        <div>

            {headerButtons.map(button => (
              <div>
                <Button>{button}</Button>
              </div>
            ))}


            <Title />
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae, architecto, dolores, suscipit possimus fugit atque tenetur mollitia distinctio quod enim accusantium debitis repellat ipsum reprehenderit sequi eligendi beatae vel!</Paragraph>
            <ul>
                <li><Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas autem ducimus corrupti laudantium voluptate excepturi, rerum soluta molestias quas repudiandae. Nam quos blanditiis molestias, voluptates consectetur beatae dignissimos soluta.</Paragraph></li>
                <li><Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas autem ducimus corrupti laudantium voluptate excepturi, rerum soluta molestias quas repudiandae. Nam quos blanditiis molestias, voluptates consectetur beatae dignissimos soluta.</Paragraph></li>
                <li><Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas autem ducimus corrupti laudantium voluptate excepturi, rerum soluta molestias quas repudiandae. Nam quos blanditiis molestias, voluptates consectetur beatae dignissimos soluta.</Paragraph></li>
            </ul>

            <Button>Read More</Button>
        </div>
    </div>
  )
}

export default AboutSection