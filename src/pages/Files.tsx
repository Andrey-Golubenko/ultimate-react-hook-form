import { forwardRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import CustomForm from '@/Components/FormComponents/CustomForm'
import FileInput from '@/Components/FormComponents/FileInput'
import NavButtons from '@/Components/NavButtons'
import { IFormFields, useData } from '../HOC/DataContex'
import { schemaFiles } from '../Yup/validatingSchemas'

type FilesType = Pick<IFormFields, 'loadFiles'>

const Files = forwardRef((_, ref) => {
  const { formData, setFormValue } = useData()
  const {
    handleSubmit,
    setValue,
    register,
    watch,
    formState: { errors }
  } = useForm<FilesType>({
    defaultValues: { loadFiles: formData?.loadFiles },
    resolver: yupResolver(schemaFiles)
  })

  const [hasDuplicate, setHasDuplicate] = useState<string[] | []>([])

  const onSubmit = (data: FilesType) => {
    setFormValue(data)
  }

  return (
    <>
      <Typography variant="h5">Upload your files</Typography>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <FileInput
          name="loadFiles"
          setValue={setValue}
          register={register}
          watch={watch}
          validatErrors={errors?.loadFiles}
          hasDuplicate={hasDuplicate}
          setHasDuplicate={setHasDuplicate}
        />
        <NavButtons ref={ref} />
      </CustomForm>
    </>
  )
})

export default Files
