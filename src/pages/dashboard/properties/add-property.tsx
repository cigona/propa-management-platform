import { Button, Container, Grid, Group, Space, Tabs, Text, Stepper} from '@mantine/core'
import { ChatText, PresentationChart, FileArrowUp, ArrowLeft } from 'phosphor-react'
import MainLayout from '../../../layout/Main'
import StyledRadioButton from '../../../components/inputs/StyledRadioButton';
import { useState } from 'react';
import CreatePropertyTypeView from '../../../views/Properties/CreatePropertyTypeView';
import CreatePropertyDetailsView from '../../../views/Properties/CreatePropertyUnitsView';
import CreatePropertyDetailView from '../../../views/Properties/CreatePropertyDetailView';
import CreatePropertyUnitsView from '../../../views/Properties/CreatePropertyUnitsView';



function AddProperties() {
    const [active, setActive] = useState(1);
  const nextStep = () => setActive((current: number) => (current < 7 ? current + 1 : current));
  const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));

    return (
        <MainLayout>
            <Grid sx={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
                <Grid.Col span={4}>
                    <Group spacing={16}>
                        <Button variant='outline' size='sm' color='dark'><ArrowLeft size={16} /></Button>
                    <Text weight={800} sx={{ fontSize: 24 }} size={'xl'} color='dark'>Add Property</Text>
                    </Group>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Group sx={{justifyContent: 'end'}} spacing={5}>
                        <Button color='orange' leftIcon= {<FileArrowUp size={20} />}>Upload Properties</Button>
                    </Group>

                </Grid.Col>
            </Grid>
            <Space h='lg' />
        <Stepper size='xs' color='dark' active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Type">
        <CreatePropertyTypeView action = {nextStep}/>
        </Stepper.Step>

        <Stepper.Step label="Details">
        <CreatePropertyDetailView action = {nextStep}/>
        </Stepper.Step>

        <Stepper.Step label="Units" >
         <CreatePropertyUnitsView action = {nextStep} />
        </Stepper.Step>

        <Stepper.Step label="Policies">
          
        </Stepper.Step>
        <Stepper.Step label="Costs">
          
        </Stepper.Step>
        <Stepper.Step label="Tenants">
          
        </Stepper.Step>
        <Stepper.Step label="Confirm">
         
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
            
       
           
           
        </MainLayout>
    )
}

export default AddProperties

