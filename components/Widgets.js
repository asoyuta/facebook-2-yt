import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'

const contacts = [
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/zvy',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/snf',
  },
  {
    name: 'Harry Potter',
    src: 'https://links.papareact.com/d0c',
  },
  {
    name: 'The Queen',
    src: 'https://links.papareact.com/6gg',
  },
  {
    name: 'James Bond',
    src: 'https://links.papareact.com/r57',
  },
]

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact, i) => (
        <Contact key={i} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets