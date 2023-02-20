import { Avatar, Button, Center, Grid, Group, Radio, Space, Switch, Text, TextInput, UnstyledButton, useMantineTheme, Card } from '@mantine/core'
import { FieldArray, Form, Formik } from 'formik'
import { ArrowRight, Lightning, PencilSimple, Plus, Question, Trash } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import AddUserToPropertyCard from '../../components/cards/AddUserToPropertyCard'
import StyledRadioButton from '../../components/inputs/StyledRadioButton'
import StyledTextInput from '../../components/inputs/StyledTextInput'
import OnboardingLayout from '../../layout/Onboarding'
import { Unit } from '../../lib/types/properties/unit.type'

type props = { action: () => void }

type group = { name: string, units: Unit[] }


function CreatePropertyUnitsView({ action }: props) {
    const theme = useMantineTheme()
    const [group, setGroup] = useState([] as { name: string, units: Unit[] }[])
    const [units, setUnits] = useState([] as Unit[])


    return (
        <div style={{ paddingInline: 16 }}>
            <Space h='xl' />
            <Group sx={{ justifyContent: 'space-between' }}>
                <Text weight={600} size='lg'>Add units to your property</Text>
                <Switch color='dark' label='Show Grouped' sx={{ fontWeight: 600 }} />
            </Group>
            <Space h='xl' />

            <Formik
                initialValues={{
                    groups: [] as group[]
                }}
                onSubmit={(values) => {
                    // TO-DO integrate with API
                    console.log(values)
                }}
            >

                {({ values, handleChange }) => (
                    <Form>
                        <FieldArray
                            name='groups'
                            render={arrayHelpers => (
                                <div>
                                    {values.groups && values.groups.length > 0 && values.groups.map((group, i) => (
                                        <div key={i}>
                                            <Card shadow='lg'>
                                                <Card.Section>
                                                    <Group p={16} sx={{ justifyContent: 'space-between' }}>
                                                        <TextInput variant='unstyled' onChange={(handleChange)} name={`groups.${i}.name`} placeholder='Group Name' color='dark' rightSection={<PencilSimple size={16} />} />
                                                        <Button color='red' variant='white' onClick={() => { arrayHelpers.pop() }} rightIcon={<Trash />} size='md'>Delete Group</Button>
                                                    </Group>
                                                </Card.Section>
                                                <FieldArray
                                                    name={`groups.${i}.units`}
                                                    render={unitArrayHelpers => (
                                                        <div>
                                                            {group.units && group.units.map((unit, j) => (
                                                                <Grid sx={{ padding: 24 }}>
                                                                    <Grid.Col md={4}>
                                                                        <StyledTextInput label='Unit Name' />
                                                                    </Grid.Col>
                                                                    <Grid.Col md={3}>
                                                                        <StyledTextInput type='number' label='Bedrooms' />
                                                                    </Grid.Col>
                                                                    <Grid.Col md={2}>
                                                                        <StyledTextInput type='number' label='Bathrooms' />
                                                                    </Grid.Col>
                                                                    <Grid.Col md={2}>
                                                                        <StyledTextInput type='number' label='Floor Area (sq. feet)' />
                                                                    </Grid.Col>
                                                                    <Grid.Col md={1}>
                                                                        <Button onClick={() => unitArrayHelpers.pop()} variant='white' size='lg' color='red'><Trash size={24} /></Button>
                                                                    </Grid.Col>
                                                                </Grid>
                                                            ))}
                                                            <Space h='md' />
                                                            <Button onClick={() => {unitArrayHelpers.push({} as Unit)}} variant='outline' color='orange'>Add another unit to {group.name}</Button>
                                                        </div>
                                                    )}
                                                />


                                            </Card>
                                            <Space h='xl' />
                                        </div>
                                    ))}

                                    <div style={{ padding: 24, border: `1px dashed ${theme.colors.gray[8]}`, display: 'grid', placeContent: 'center', borderRadius: 8 }}>
                                        <Button onClick={() => { arrayHelpers.push({} as group) }} variant='white' color='dark' size='lg' leftIcon={<Plus />}>New Group</Button>
                                    </div>
                                </div>
                            )}
                        />


                    </Form>
                )}
            </Formik>


        </div>
    )
}

export default CreatePropertyUnitsView