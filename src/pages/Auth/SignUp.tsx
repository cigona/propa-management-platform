import { Stepper } from '@mantine/core';
import React, { useState } from 'react'
import OnboardingLayout from '../../layout/Onboarding'
import CreateProfileView from '../../views/auth/CreateProfileView';

function SignUp() {
    const [active, setActive] = useState(1);
  const nextStep = () => setActive((current: number) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));
  return (
    <OnboardingLayout>
        <Stepper size='xs' color='dark' active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Create Account">
          <CreateProfileView/>
        </Stepper.Step>
        <Stepper.Step label="Account Details">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Company Setup (Optional)" >
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step label="Company Team (Optional)">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
    </OnboardingLayout>
  )
}

export default SignUp