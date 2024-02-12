import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react'
import React from 'react'
import { Radio } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'

export default function Sidebar() {
  return (
    <div class="bg-gray-100 h-screen py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:w 3/4">
            <Card className="bg-peach w-full p-4 shadow-xl shadow-blue-gray-900/5">
              <List>
                <ListItem className="font-bold text-lg hover-hover">
                  Profil Saya
                </ListItem>
                <ListItem className="font-bold text-lg hover-hover">
                  Pesanan Saya
                </ListItem>
                <ListItem className="font-bold text-lg hover-hover">
                  Alamat Pengiriman
                </ListItem>
                <ListItem className="font-bold text-lg hover-hover">
                  Keranjang
                </ListItem>
                <ListItem className="font-bold text-lg hover-hover">
                  Ulasan
                </ListItem>
                <ListItem className="font-bold text-lg hover-hover">
                  Keluar
                </ListItem>
              </List>
            </Card>
          </div>
          <div className="md:w-4/5">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-lg font-bold">Profil Saya</h1>
              <span>
                Kelola informasi profil Anda untuk mengontrol, melindungi dan
                mengamankan akun
              </span>
              <hr className="w-full mb-8" />
              <h1 className="text-sm font-bold">Nama</h1>
              <div className="w-3/5 mb-8">
                <Input label="Nama Lengkap" />
              </div>
              <h1 className="text-sm font-bold">Username</h1>
              <div className="w-3/5 mb-8">
                <Input label="Username" />
              </div>
              <h1 className="text-sm font-bold">Email</h1>
              <div className="w-3/5 mb-8">
                <Input label="email" />
              </div>
              <h1 className="text-sm font-bold">Tanggal Lahir</h1>
              <div className="w-3/5 mb-8">
                <Input label="Tanggal Lahir" />
              </div>
              <h1 className="text-sm font-bold">Nomor Telepon</h1>
              <div className="w-3/5 mb-8">
                <Input label="Nomor Telepon" />
              </div>
              <div className="flex gap-10">
                <Radio name="type" label="Laki-laki" />
                <Radio name="type" label="Perempuan" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
