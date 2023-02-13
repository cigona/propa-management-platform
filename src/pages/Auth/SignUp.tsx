import { Stepper } from '@mantine/core';
import React, { useState } from 'react'
import OnboardingLayout from '../../layout/Onboarding'
import AddCompanyDetails from '../../views/auth/AddCompanyDetails';
import AddProfileDetailsView from '../../views/auth/AddProfileDetailsView';
import AddTeamMembers from '../../views/auth/AddTeamMembers';
import CreateProfileView from '../../views/auth/CreateProfileView';

function SignUp() {
    const [active, setActive] = useState(0);
  const nextStep = () => setActive((current: number) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));
  return (
    <OnboardingLayout>
        <Stepper size='xs' color='dark' active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Create Account">
          <CreateProfileView action={nextStep} />
        </Stepper.Step>
        <Stepper.Step label="Account Details">
          <AddProfileDetailsView action={nextStep} />
        </Stepper.Step>
        <Stepper.Step label="Company Setup (Optional)" >
          <AddCompanyDetails action={nextStep} />
        </Stepper.Step>
        <Stepper.Step label="Company Team (Optional)">
          <AddTeamMembers />
        </Stepper.Step>
        <Stepper.Completed>
        </Stepper.Completed>
      </Stepper>
    </OnboardingLayout>
  )
}

export default SignUp