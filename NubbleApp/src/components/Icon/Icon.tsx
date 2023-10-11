import React from 'react';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ArrowRight} from '../../assets/icons/ArrowRight';
import {ArrowLeft} from '../../assets/icons/ArrowLeft';
import {Bell} from '../../assets/icons/Bell';
import {BellOn} from '../../assets/icons/BellOn';
import {Bookmark} from '../../assets/icons/Bookmark';
import {BookmarkFill} from '../../assets/icons/BookmarkFill';
import {Camera} from '../../assets/icons/Camera';
import {Chat} from '../../assets/icons/Chat';
import {ChatOn} from '../../assets/icons/ChatOn';
import {Check} from '../../assets/icons/Check';
import {Comment} from '../../assets/icons/Comment';
import {ChevronRight} from '../../assets/icons/ChevronRight';
import {FlashOff} from '../../assets/icons/FlashOff';
import {FlashOn} from '../../assets/icons/FlashOn';
import {Heart} from '../../assets/icons/Heart';
import {HeartFill} from '../../assets/icons/HeartFill';
import {Home} from '../../assets/icons/Home';
import {HomeFill} from '../../assets/icons/HomeFill';
import {Message} from '../../assets/icons/Message';
import {NewPost} from '../../assets/icons/NewPost';
import {Profile} from '../../assets/icons/Profile';
import {ProfileFill} from '../../assets/icons/ProfileFill';
import {Search} from '../../assets/icons/Search';
import {Settings} from '../../assets/icons/Settings';
import {Trash} from '../../assets/icons/Trash';

export interface IconBase {
  color?: string;
  size?: number;
}

interface Props {
  name: IconNames;
  color?: ThemeColors;
  size?: number;
  notifyColor?: ThemeColors;
}
export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bell: Bell,
  bellOn: BellOn,
  bookmark: Bookmark,
  bookmarkFill: BookmarkFill,
  camera: Camera,
  chat: Chat,
  chatOn: ChatOn,
  check: Check,
  chevronRight: ChevronRight,
  comment: Comment,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOff,
  flashOn: FlashOn,
  heart: Heart,
  heartFill: HeartFill,
  home: Home,
  homeFill: HomeFill,
  message: Message,
  newPost: NewPost,
  profile: Profile,
  profileFill: ProfileFill,
  search: Search,
  settings: Settings,
  trash: Trash,
};

type IconType = typeof iconRegistry;
type IconNames = keyof IconType;
