import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = createClient()
  const { data: componentLibs } = await supabase.from('componentlibs').select()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className='flex flex-col gap-4'>
      {componentLibs!.map((componentLib) => (
        <div className='p-10 mx-4 border border-neutral-300 rounded-xl hover:bg-neutral-100 hover:cursor-pointer' key={componentLib.id}>
          <p>{componentLib.title}</p>
        </div>
      ))}
    </div>
  )
}
