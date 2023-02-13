import { Center, Container, Group, Select, Space, Text } from '@mantine/core'
import { useState } from 'react'
import TopBorderContainer from '../../components/containers/TopBorderContainer'
import StyledTextInput from '../../components/inputs/StyledTextInput';

function AddTeamMembers() {

    const [inputCount, setInputCount] = useState(0);

    const increaseCount = () => {
        let newCount = inputCount;
        newCount++
        setInputCount(newCount);
    }

    return (
        <TopBorderContainer>
            <Center>
                <div>
                    <Text size='xl' color='dark' weight={600}>Add company employees</Text>
                    <Text size='xl' color='dark' >Sent invites to your team.</Text>
                    <Space h='xl' />
                    <Group spacing='xl'>
                        <StyledTextInput label='Email Address' type='email' />
                        <Select
                            label=""
                            placeholder=""
                            data={[
                                { value: 'full', label: 'Full Access' },
                                { value: 'view', label: 'View Only' },

                            ]}
                        />
                    </Group>
                </div>

            </Center>


                    

        </TopBorderContainer>
    )
}

export default AddTeamMembers