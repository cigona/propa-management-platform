import { Button, Center, Container, Loader, Space, Text } from '@mantine/core'
import { ArrowRight } from 'phosphor-react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'


function SetupComplete() {
    const navigate = useNavigate();
    const [slide, setSlide] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            setSlide(1)
        }, 4000);

        return () => {

        }
    }, [])


    const addProperty = () => {
        navigate('/properties/add')
    }
    return (

        <Container sx={{ minHeight: '100vh' }} size={'lg'}>
            <Center sx={{ minHeight: '100vh', width: '100%' }}>
                {slide === 0 ?
                    <div>
                        <Center>
                            <Loader color='orange' />
                        </Center>
                        <Space h='xl' />
                        <Text align='center' size='xl' weight={600}>
                            Setup Complete
                        </Text>
                        <Text align='center'>Please wait</Text>
                        <Space h='xl' />

                    </div> :
                    <div>
                        <Space h='xl' />
                        <Text align='center' size='xl' weight={600}>
                            Welcome Norman
                        </Text>
                        <Text align='center'>Let us create your first property</Text>
                        <Space h='xl' />
                        <Center>
                            <Button onClick={addProperty}  size='md' color='orange'>
                                Lets Go!
                            </Button>
                        </Center>
                    </div>
                }

            </Center>
        </Container>

    )
}

export default SetupComplete