import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { IFormFields, useData } from '../HOC/DataContex'
import CustomForm from '../HOC/CustomForm'
import TextInput from '../components/TextInput'
import PrimaryButton from '../components/PrimaryButton'
import { schemaPersonalInfo } from '../validatingSchemas'
import paths from '../constants'

const PersonalInfo = () => {
  const { formData, setFormValue } = useData()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Pick<IFormFields, 'firstName' | 'lastName'>>({
    defaultValues: { firstName: formData?.firstName, lastName: formData?.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schemaPersonalInfo)
  })
  const navigate = useNavigate()

  const onSubmit = (data: IFormFields) => {
    setFormValue(data)
    navigate(paths.contacts)
  }

  return (
    <>
      <Typography variant="h5">Personal Information</Typography>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          {...register('firstName')}
          id="firstName"
          name="firstName"
          type="text"
          label="First Name"
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
        />
        <TextInput
          {...register('lastName')}
          id="lastName"
          name="lastName"
          type="text"
          label="Last Name"
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </CustomForm>
    </>
  )
}

export default PersonalInfo
