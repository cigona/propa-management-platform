import { Button, Center, Container, Space, Text } from '@mantine/core'
import { ArrowRight } from 'phosphor-react'
import { useNavigate } from 'react-router'
import LandingLayout from '../layout/Landing'

function Landing() {
  const navigate = useNavigate();

  const startOnboarding= () => {
    navigate('/sign-up')
  }
  return (
    <div>
      <LandingLayout>
        <Container sx={{ minHeight: '100vh' }} size={'lg'}>
          <Center sx={{ minHeight: '100vh', width: '100%' }}>
            <div>
              <Text align='center' size={72} weight={600}>
                Propa is the best way to manage your property
              </Text>
              <Space h='xl'/>
              <Center>
                <Button onClick={startOnboarding} rightIcon={<ArrowRight />} size='md' color='orange'>
                  Get Started
                </Button>
              </Center>

            </div>

          </Center>
        </Container>

      </LandingLayout>
    </div>
  )
}

export default Landing