import { forwardRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import CustomForm from '@/Components/FormComponents/CustomForm'
import FileInput from '@/Components/FormComponents/FileInput'
import NavButtons from '@/Components/NavButtons'
import { useData } from '@/HOC/DataContex'
import { schemaFiles } from '@/Yup/validatingSchemas'
import { SaveData, FilesType } from '@/types'

const Files: React.ForwardRefExoticComponent<
  SaveData & React.RefAttributes<unknown>
> = forwardRef(({ saveData }, ref) => {
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

  const [duplicates, setDuplicates] = useState<string[] | []>([])

  const onFormSubmit =
    saveData ||
    ((data: FilesType) => {
      setFormValue({ ...data, isDataReceived: true })
    })

  return (
    <>
      <Typography variant="h5">Upload your files</Typography>
      <CustomForm onSubmit={handleSubmit(onFormSubmit)}>
        <FileInput
          name="loadFiles"
          setValue={setValue}
          register={register}
          watch={watch}
          validatErrors={errors?.loadFiles}
          duplicates={duplicates}
          setDuplicates={setDuplicates}
        />
        <NavButtons ref={ref} />
      </CustomForm>
    </>
  )
})

export default Files
