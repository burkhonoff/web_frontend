import { Shop } from "@/types/shop";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import ChevronRightIcon from "@/assets/icons/chevron-right";
import React from "react";

interface ExpandableShopProps extends React.PropsWithChildren {
  shop?: Shop;
  defaultOpen?: boolean;
  extra?: React.ReactElement;
}

export const ExpandableShop = ({ shop, defaultOpen, children, extra }: ExpandableShopProps) => (
  <Disclosure defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <Disclosure.Button
          className={clsx(
            "flex w-full justify-between items-center rounded-xl  py-2 text-left text-sm font-medium hover:brightness-90 transition-all focus-ring "
          )}
        >
          <div className="flex items-center gap-2">
            <Link href={`/shops/${shop?.id}`} className="flex items-center gap-2">
              <Image
                src={shop?.logo_img || ""}
                alt={shop?.translation?.title || "shop"}
                width={44}
                height={44}
                className="rounded-full object-cover w-11 h-11"
              />
              <span>{shop?.translation?.title}</span>
            </Link>
            {extra}
          </div>
          <ChevronRightIcon
            className={`${open ? "-rotate-90 transform" : "rotate-90"} transition-all h-5 w-5`}
          />
        </Disclosure.Button>
        <Disclosure.Panel>{children}</Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
