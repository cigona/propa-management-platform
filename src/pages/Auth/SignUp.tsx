import { Stepper } from '@mantine/core';
import React, { useState } from 'react'
import OnboardingLayout from '../../layout/Onboarding'
import AddProfileDetailsView from '../../views/auth/AddProfileDetailsView';
import CreateProfileView from '../../views/auth/CreateProfileView';

function SignUp() {
    const [active, setActive] = useState(0);
  const nextStep = () => setActive((current: number) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));
  return (
    <OnboardingLayout>
        <Stepper size='xs' color='dark' active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Create Account">
          <CreateProfileView/>
        </Stepper.Step>
        <Stepper.Step label="Account Details">
          <AddProfileDetailsView />
        </Stepper.Step>
        <Stepper.Step label="Company Setup (Optional)" >
        </Stepper.Step>
        <Stepper.Step label="Company Team (Optional)">
        </Stepper.Step>
        <Stepper.Completed>
        </Stepper.Completed>
      </Stepper>
    </OnboardingLayout>
  )
}

export default SignUp