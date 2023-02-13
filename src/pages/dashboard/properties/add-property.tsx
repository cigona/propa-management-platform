import { Button, Container, Grid, Group, Space, Tabs, Text, Stepper} from '@mantine/core'
import { ChatText, PresentationChart, FileArrowUp } from 'phosphor-react'
import MainLayout from '../../../layout/Main'
import StyledRadioButton from '../../../components/inputs/StyledRadioButton';



function AddProperties() {
    const [active, setActive] = useState(1);
  const nextStep = () => setActive((current: number) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));

    return (
        <MainLayout>
            <Grid sx={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
                <Grid.Col span={4}>
                    <Text weight={800} sx={{ fontSize: 24 }} size={'xl'} color='dark'>Add Properties</Text>
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

        </Stepper.Step>

        <Stepper.Step label="Details">
        </Stepper.Step>

        <Stepper.Step label="Units" >
         
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

function useState(arg0: number): [any, any] {
    throw new Error('Function not implemented.');
}
