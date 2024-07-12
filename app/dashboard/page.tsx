import AuthButton from '@/components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
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
    <>
      <AuthButton />
      {/* <div className="flex flex-col gap-4 pt-32">
        <h1 className='font-bold text-3xl'>Fetched Component Libs</h1>
        {componentLibs!.map((componentLib) => (
          <div
            className="p-10 border border-neutral-300 rounded-xl hover:bg-neutral-100 hover:cursor-pointer"
            key={componentLib.id}
          >
            <p>{componentLib.title}</p>
          </div>
        ))}
      </div> */}
      <p>hello</p>
    </>
  )
}
